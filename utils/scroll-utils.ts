export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    // Get the header height to offset the scroll position
    const header = document.querySelector("header")
    const headerHeight = header ? header.clientHeight : 0

    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}

