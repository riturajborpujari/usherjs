function init() {
	Usher.ViewGroup.Register("mainView", ["#view-1", "#view-2", "#view-3"], "shown", "#view-1")
	Usher.ViewGroup.Register("navLinks", ["#link-1", "#link-2", "#link-3"], "active", "#link-1")

	Usher.Toggle.Register("see-more", "#expandable-1", "expanded", false)
}

init()
