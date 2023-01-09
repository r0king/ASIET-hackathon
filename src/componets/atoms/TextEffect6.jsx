import React, { useEffect } from 'react'

const TextEffect6 = ({ textId = "text-te6", children }) => {

  useEffect(() => {
    let text = document.getElementById(textId);
    let content = text.textContent;
    text.textContent = "";
    let toBlink = [8]; /* ::Choose index letters you want to see blink */
    let toBlinkFast = [1]; /* ::Choose index letters you want to see blink fast */
    
    [...content].map((letter, index) => {
      let newSpan = document.createElement("span")
      newSpan.innerHTML = letter
      let randomDelay = `${Math.random() * 5}s` // Random delay for multiple blinks

      // Blink letters
      if (toBlink.includes(index)) {
        newSpan.classList.add("animate-blink")
        newSpan.style.setProperty("animation-delay", randomDelay)
        return text.appendChild(newSpan)
      }

      // Blink fast letters
      if (toBlinkFast.includes(index)) {
        newSpan.classList.add("animate-blinkfast")
        newSpan.style.setProperty("animation-delay", randomDelay)
        return text.appendChild(newSpan)
      }

      // Space
      if (letter === " ") {
        newSpan.innerHTML = "&nbsp;"
        return text.appendChild(newSpan)
      }

      // Normal letters
      return text.append(letter)
    })
  }, [children, textId])

  return (
    <h1 id={textId} className="text-4xl tracking-widest text-[#F1F1F1] uppercase font-clip text-shadow-te6 animate-flick ">
      {children}
    </h1>
  )
}

export default TextEffect6