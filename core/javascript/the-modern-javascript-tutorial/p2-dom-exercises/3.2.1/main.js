let tooltip = null

const showTooltip = (elem) => {
    const tooltip = document.createElement('text')
    tooltip.className = 'tooltip'
    tooltip.innerHTML = elem.dataset['tooltip']
    document.body.append(tooltip)

    const anchorRect = elem.getBoundingClientRect()
    let left = anchorRect.left + (elem.offsetWidth - tooltip.offsetWidth) / 2
    if (left < 0) left = 0

    let top = anchorRect.top - tooltip.offsetHeight - 5
    if (top < 0) top = anchorRect.top + elem.offsetHeight + 5

    tooltip.style.left = `${left}px`
    tooltip.style.top = `${top}px`

    return tooltip
}

document.onmouseover = (event) => {
    const anchorElem = event.target.closest('[data-tooltip]')
    if (!anchorElem) return

    tooltip = showTooltip(anchorElem)
}

document.onmouseout = (event) => {
    if (tooltip) {
        tooltip.remove()
        tooltip = null
    }
}
