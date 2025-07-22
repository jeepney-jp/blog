import React, { useEffect, useState } from 'react'
import { useClient } from 'sanity'
import { set, unset } from 'sanity'

export function ServiceDetailSelect(props: any) {
  const { onChange, value, document } = props
  const client = useClient({ apiVersion: '2024-01-01' })
  const [services, setServices] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const categoryId = document?.serviceCategory?._ref

  useEffect(() => {
    if (!categoryId) {
      setServices([])
      return
    }

    const fetchServices = async () => {
      setLoading(true)
      try {
        const query = `*[_type == "serviceDetail" && parentCategory._ref == $categoryId] | order(orderRank asc, title asc) {
          _id,
          title,
          "categoryTitle": parentCategory->title
        }`
        const result = await client.fetch(query, { categoryId })
        setServices(result)
      } catch (error) {
        console.error('Failed to fetch services:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [client, categoryId])

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value
    if (selectedValue) {
      onChange(set({
        _type: 'reference',
        _ref: selectedValue
      }))
    } else {
      onChange(unset())
    }
  }

  if (!categoryId) {
    return (
      <select disabled style={{
        width: '100%',
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '14px',
        backgroundColor: '#f5f5f5'
      }}>
        <option>まずサービスカテゴリーを選択してください</option>
      </select>
    )
  }

  if (loading) {
    return <select disabled style={{
      width: '100%',
      padding: '8px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '14px',
      backgroundColor: '#f5f5f5'
    }}><option>読み込み中...</option></select>
  }

  return (
    <select
      value={value?._ref || ''}
      onChange={handleChange}
      style={{
        width: '100%',
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '14px',
        backgroundColor: 'white'
      }}
    >
      <option value="">サービス詳細を選択してください</option>
      {services.map((service) => (
        <option key={service._id} value={service._id}>
          {service.title}
        </option>
      ))}
    </select>
  )
}