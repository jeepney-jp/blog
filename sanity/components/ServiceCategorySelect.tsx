import React, { useEffect, useState } from 'react'
import { useClient } from 'sanity'
import { Select } from '@sanity/ui'
import { set, unset } from 'sanity'

export function ServiceCategorySelect(props: any) {
  const { onChange, value, schemaType } = props
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
    return <Select disabled><option>読み込み中...</option></Select>
  }

  return (
    <Select
      value={value?._ref || ''}
      onChange={handleChange}
    >
      <option value="">サービスカテゴリーを選択してください</option>
      {categories.map((category) => (
        <option key={category._id} value={category._id}>
          {category.title}
        </option>
      ))}
    </Select>
  )
}