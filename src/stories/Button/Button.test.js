import React from "react"
import { Button } from "./Button"
import { render, fireEvent } from "@testing-library/react"

describe("Button", () => {
  it("renders the button with the correct label", () => {
    const { getByText } = render(<Button label="Test Button" />)
    expect(getByText("Test Button")).toBeInTheDocument()
  })

  it("applies the primary style when primary is true", () => {
    const { container } = render(<Button primary label="Test Button" />)
    expect(container.firstChild).toHaveClass("storybook-button--primary")
  })

  it("applies the secondary style when primary is false", () => {
    const { container } = render(<Button primary={false} label="Test Button" />)
    expect(container.firstChild).toHaveClass("storybook-button--secondary")
  })

  it("applies the correct size class", () => {
    const { container } = render(<Button size="large" label="Test Button" />)
    expect(container.firstChild).toHaveClass("storybook-button--large")
  })

  it("applies the correct background color when provided", () => {
    const { container } = render(
      <Button backgroundColor="red" label="Test Button" />
    )
    expect(container.firstChild).toHaveStyle("background-color: red")
  })

  it("handles onClick event", () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <Button label="Test Button" onClick={handleClick} />
    )
    fireEvent.click(getByText("Test Button"))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
