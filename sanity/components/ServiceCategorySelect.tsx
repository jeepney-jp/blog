import React, { useEffect, useState } from 'react'
import { useClient } from 'sanity'
import { set, unset } from 'sanity'

export function ServiceCategorySelect(props: any) {
  const { onChange, value, schemaType, readOnly, elementProps } = props
  const client = useClient({ apiVersion: '2024-01-01' })
  const [categories, setCategories] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const query = `*[_type == "serviceCategory"] | order(orderRank asc, title asc) {
          _id,
          title
        }`
        const result = await client.fetch(query)
        setCategories(result)
      } catch (error) {
        console.error('Failed to fetch categories:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [client])

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

  if (loading) {
    return <select disabled><option>読み込み中...</option></select>
  }

  return (
    <select
      {...elementProps}
      value={value?._ref || ''}
      onChange={handleChange}
      disabled={readOnly}
      style={{
        width: '100%',
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '14px',
        backgroundColor: readOnly ? '#f5f5f5' : 'white'
      }}
    >
      <option value="">サービスカテゴリーを選択してください</option>
      {categories.map((category) => (
        <option key={category._id} value={category._id}>
          {category.title}
        </option>
      ))}
    </select>
  )
}