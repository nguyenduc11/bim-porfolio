import React from 'react'
import SkillItem from './SkillItem'

export default function SkillCategory({ category }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="w-12 h-12 text-gray-700 mb-6" dangerouslySetInnerHTML={{ __html: category.icon }} />
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">{category.title}</h3>
      <div className="space-y-6">
        {category.skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </div>
  )
}
