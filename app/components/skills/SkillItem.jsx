export default function SkillItem({ skill }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-700 font-medium">{skill.name}</span>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2.5">
        <div 
          className="bg-gray-900 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${skill.level}%` }}
        />
      </div>
      {skill.description && (
        <p className="text-sm text-gray-600 mt-2">{skill.description}</p>
      )}
    </div>
  )
}
