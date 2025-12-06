(function (global) {
	const viewConfigs = {};
	const toggles = {};

	function resolveElement(target) {
		if (!target) {
			return null;
		}

		if (typeof (target) == "string") {
			return document.querySelector(target);
		}

		return target;
	}

	function initViewGroup(name, members, activeClass, initial) {
		const activeTarget = resolveElement(initial);
		Reflect.set(viewConfigs, name, {
			members: members.map(resolveElement),
			active: activeTarget,
			activeClass: activeClass
		})

		if (activeTarget) {
			activeTarget.classList.add(activeClass)
		}
	}

	function selectView([viewGroupName, view]) {
		const viewGroup = Reflect.get(viewConfigs, viewGroupName)
		if (!viewGroup) {
			throw new Error(`${viewGroupName}: ViewGroup undefined`)
		}

		const target = resolveElement(view);
		if (!viewGroup.members.includes(target)) {
			throw new Error(`${view}: invalid view for ViewGroup: ${viewGroupName}`)
		}
		const prevTarget = resolveElement(viewGroup.active);
		if (target == prevTarget) {
			return;
		}

		target
			.classList
			.add(viewGroup.activeClass)
		prevTarget
			.classList
			.remove(viewGroup.activeClass);

		viewGroup.active = target
	}

	function selectViewFromMultiple(selections) {
		selections.forEach(selectView)
	}

	function initToggle(name, target, className, initialStatus = false) {
		Reflect.set(toggles, name, {
			target: resolveElement(target),
			className: className,
			status: initialStatus
		})

		if (initialStatus == true) {
			resolveElement(target).classList.add(className)
		}
	}

	function toggle(name) {
		const toggle = Reflect.get(toggles, name)
		if (!toggle) {
			throw new Error(`${elemId}: not a Toggle`)
		}

		if (toggle.status == true) {
			toggle.target.classList.remove(toggle.className)
			toggle.status = false
		} else {
			toggle.target.classList.add(toggle.className)
			toggle.status = true
		}
	}

	global.Usher = Object.freeze({
		ViewGroup: Object.freeze({
			Register: initViewGroup,
			Select: selectView,
			SelectMultiple: selectViewFromMultiple,
		}),
		Toggle: Object.freeze({
			Register: initToggle,
			Toggle: toggle,
		})
	});
})(window);
