import React from "react"
import { fibonacci, lucky, padovan } from "../AppSequences/AppSequences"

export const AppContent = ({ data }) => {
  const components = {
    fibonacci,
    lucky,
    padovan,
  }

  const renderSpecificComponent = (componentName) => {
    const Component = components[componentName]
    console.log("Component:: ", componentName)
    return Component ? (
      <Component key={componentName} />
    ) : (
      <div key={componentName}>""</div>
    )
  }

  return (
    <div>
      {data?.sequences?.length ? (
        data.sequences.map((componentName) =>
          renderSpecificComponent(componentName)
        )
      ) : (
        <div>""</div>
      )}
      {data?.infoRu?.map((txt, idx) => (
        <p key={`p-${idx}`}>{txt}</p>
      ))}
    </div>
  )
}
