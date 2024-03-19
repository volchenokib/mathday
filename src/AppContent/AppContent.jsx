import React from "react"
import {
  fibonacci,
  harshad,
  lucky,
  padovan,
  ulam,
} from "../AppSequences/AppSequences"

export const AppContent = ({ data }) => {
  const components = {
    fibonacci,
    harshad,
    lucky,
    padovan,
    ulam,
  }

  const renderSpecificComponent = (componentName) => {
    const Component = components[componentName]
    return Component ? (
      <Component key={componentName} nod={data.value} />
    ) : (
      <div key={componentName}></div>
    )
  }

  return (
    <div>
      {data?.content?.sequences.length ? (
        data.content?.sequences.map((componentName) =>
          renderSpecificComponent(componentName)
        )
      ) : (
        <div>""</div>
      )}
      {data?.content?.infoRu?.map((txt, idx) => (
        <p key={`p-${idx}`}>{txt}</p>
      ))}
    </div>
  )
}
