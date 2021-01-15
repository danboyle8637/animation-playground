/*
 * This is used on the Extra Info cards in the sales pages.
 * It's also used for the On The Fence cards in the sales pages.
 */

interface BlogTipCardColors {
	gradient: string
	headline: string
}

export const gradientLineBg = (programCategory: string): string => {
	switch (programCategory) {
		case "ignite": {
			return `linear-gradient(to right, #ffc8e0, #ff70eb, #ff0097)`
		}
		case "body_burn": {
			return `linear-gradient(to right, #5afdf2, #1bbfb4, #1b6bff)`
		}
		case "strong": {
			return `linear-gradient(to right, #f253dc, #8b53f6, #474edd)`
		}
		case "nutrition": {
			return `linear-gradient(to right, #d6c0ff, #8b53f6, #474edd)`
		}
		default: {
			return `linear-gradient(to right, #5afdf2, #1bbfb4, #1b6bff)`
		}
	}
}

export const programShadow = (programCategory: string): string => {
	switch (programCategory) {
		case "ignite": {
			return `0 0 0 2px #1E1E23, 0 0 0 5px #ff0097`
		}
		case "body_burn": {
			return `0 0 0 2px #1E1E23, 0 0 0 5px #5afdf2`
		}
		case "strong": {
			return `0 0 0 2px #1E1E23, 0 0 0 5px #8b53f6`
		}
		case "nutrition": {
			return `0 0 0 2px #e1e1e1, 0 0 0 5px #7B81FF`
		}
		default: {
			return `0 0 0 2px #1E1E23, 0 0 0 5px #5afdf2`
		}
	}
}

export const blogTipCard = (tipType: string): BlogTipCardColors => {
	switch (tipType) {
		case "formTip": {
			return {
				gradient: `linear-gradient(to right, #5afdf2, #1bbfb4, #1b6bff)`,
				headline: "Form Tip",
			}
		}
		case "intensityTip": {
			return {
				gradient: `linear-gradient(to right, #f253dc, #8b53f6, #474edd)`,
				headline: "Intensity Tip",
			}
		}
		case "bigIdea": {
			return {
				gradient: `linear-gradient(to right, #ffc8e0, #ff70eb, #ff0097)`,
				headline: "Big Idea",
			}
		}
		default: {
			return {
				gradient: `linear-gradient(to right, #5afdf2, #1bbfb4, #1b6bff)`,
				headline: "Form Tip",
			}
		}
	}
}

export const renderGradientPriceCardColors = (theme: string) => {
	switch (theme) {
		case "blue": {
			return {
				priceCardBackground: `linear-gradient(135deg, #1F4BFF, #1FECFF)`,
				priceCardActiveShadow: `0 18px 30px -12px rgba(180, 76, 255, 0.65)`,
				bulletBackground: `rgba(80, 253, 242, 0.35)`,
				buyButtonBackground: `linear-gradient(to right, #751AFF, #B44CFF)`,
				buyBackButtonBackground: `linear-gradient(to right, #6A38D6, #F0B3FF)`,
				buyButtonText: "#f8f8f8",
			}
		}
		case "purple": {
			return {
				priceCardBackground: `linear-gradient(135deg, #B44CFF, #5400E6)`,
				priceCardActiveShadow: `0 18px 30px -12px rgba(90, 253, 244, 0.65)`,
				bulletBackground: `rgba(84, 0, 230, 0.35)`,
				buyButtonBackground: `linear-gradient(to right, #1F4BFF, #1FECFF)`,
				buyBackButtonBackground: `linear-gradient(to right, #3D91FF, #E5FFFD)`,
				buyButtonText: "#f8f8f8",
			}
		}
		case "pink": {
			return {
				priceCardBackground: `linear-gradient(135deg, #DA1FFF, #EB85FF)`,
				priceCardActiveShadow: `0 18px 30px -12px rgba(139, 83, 246, 0.65)`,
				bulletBackground: `rgba(255, 34, 165, 0.35)`,
				buyButtonBackground: `linear-gradient(to right, #5AFDF2, #F8F8F8)`,
				buyBackButtonBackground: `linear-gradient(to right, #3D91FF, #DBF7FF)`,
				buyButtonText: "#101010",
			}
		}
		default: {
			return {
				priceCardBackground: `linear-gradient(135deg, #1F4BFF, #1FECFF)`,
				priceCardActiveShadow: `0 18px 30px -12px rgba(180, 76, 255, 0.65)`,
				bulletBackground: `rgba(80, 253, 242, 0.35)`,
				buyButtonBackground: `linear-gradient(to right, #751AFF, #B44CFF)`,
				buyBackButtonBackground: `linear-gradient(to right, #6A38D6, #F0B3FF)`,
				buyButtonText: "#f8f8f8",
			}
		}
	}
}

export const renderSiteButtonColors = (theme: string) => {
	switch (theme) {
		case "blue": {
			return {
				buttonBackground: `linear-gradient(135deg, #1F4BFF, #1FECFF)`,
				backButtonBackground: `linear-gradient(to right, #6A38D6, #F0B3FF)`,
				buyButtonText: "#f8f8f8",
				buttonOutterShadow: `0 0 0 5px #B44CFF`,
			}
		}
		case "purple": {
			return {
				buttonBackground: `linear-gradient(135deg, #B44CFF, #5400E6)`,
				backButtonBackground: `linear-gradient(to right, #3D91FF, #E5FFFD)`,
				buyButtonText: "#f8f8f8",
				buttonOutterShadow: `0 0 0 5px #1F4BFF`,
			}
		}
		case "pink": {
			return {
				buttonBackground: `linear-gradient(135deg, #DA1FFF, #EB85FF)`,
				backButtonBackground: `linear-gradient(to right, #3D91FF, #DBF7FF)`,
				buyButtonText: "#101010",
				buttonOutterShadow: `0 0 0 5px #1F4BFF`,
			}
		}
		case "inactive": {
			return {
				buttonBackground: `linear-gradient(135deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0))`,
				backButtonBackground: `linear-gradient(to right, #2E2E2E, #000000)`,
				buyButtonText: "#f8f8f8",
				buttonOutterShadow: `0 0 0 5px #A8A8A8`,
			}
		}
		default: {
			return {
				buttonBackground: `linear-gradient(135deg, #1F4BFF, #1FECFF)`,
				buyButtonText: "#f8f8f8",
				buttonOutterShadow: `0 0 0 5px #B44CFF`,
			}
		}
	}
}

export const renderFancyButtonBackground = (theme: string) => {
	const inactiveColor1 = "rgba(255, 255, 255, 0.01)"
	const inactiveColor2 = "rgba(255, 255, 255, 0.08)"
	const inactiveColor3 = "rgba(255, 255, 255, 0.04)"
	const inactiveColor4 = "rgba(255, 255, 255, 0.02)"

	switch (theme) {
		case "blue": {
			return `linear-gradient(135deg, #1F4BFF, #3D91FF, #80DAD4, #1FECFF)`
		}
		case "purple": {
			return `linear-gradient(135deg, #f253dc, #8b53f6, #474edd, #b44cff)`
		}
		case "inactive": {
			return `linear-gradient(135deg, ${inactiveColor1}, ${inactiveColor2}, ${inactiveColor3}, ${inactiveColor4})`
		}
		default: {
			throw new Error("Passed in a bad theme!")
		}
	}
}

export const renderSocialBackground = (socialAccount: string): string => {
	switch (socialAccount) {
		case "instagram": {
			return "linear-gradient(to right, #FF8714, #D7308C, #4D63D2)"
		}
		case "youtube": {
			return "linear-gradient(to right, #FF0000, #FF4141, #FF0000)"
		}
		case "facebook": {
			return "linear-gradient(to right, #4867AA, #607EBE, #4867AA)"
		}
		default: {
			return "linear-gradient(to right, #5056BB, #D28333, #B43F70)"
		}
	}
}
