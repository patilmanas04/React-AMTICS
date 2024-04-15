import EligibiltyContext from "./EligibilityContext"

const CheckEligibility = (props) => {
    const checkFormValidity = (e) => {
		const elements = Array.from(e.target.elements).filter((element) => element.tagName === "INPUT" && element.name !== "mathsPractical")
		elements.forEach((element) => {
			if(!(element.name.toLowerCase().includes("practical"))){
				if(element.value < 0 || element.value > 100){
					element.classList.add("error")
				}
				else{
					element.classList.remove("error")
				}
			}
			else{
				if(element.value < 0 || element.value > 50){
					element.classList.add("error")
				}
				else{
					element.classList.remove("error")
				}
			}
		})

		const errorElements = elements.filter((element) => element.classList.contains("error"))
		if(errorElements.length > 0){
			return false
		}
		return true
	}

    const CheckEligibilityForPCMCoTheoryAndPractical = (marks, category) => {
        const {physics, physicsPractical, maths, chemistry, chemistryPractical, computer, computerPractical} = marks

        switch(category){
            case "general":
                if(physics >= 45 && maths >= 45 && chemistry >= 45 && computer>=45){
                    const totalPhysicsMarks = physics + physicsPractical
                    const totalChemistryMarks = chemistry + chemistryPractical
                    const totalComputerMarks = computer + computerPractical
                    if(totalChemistryMarks >= 67.5 && totalPhysicsMarks >= 67.5 && totalComputerMarks >= 67.5 && maths >= 45){
                        return true
                    }
                }
                return false
            case "sebs":
                if(physics >= 45 && maths >= 45 && chemistry >= 45 && computer>=45){
                    const totalPhysicsMarks = physics + physicsPractical
                    const totalChemistryMarks = chemistry + chemistryPractical
                    const totalComputerMarks = computer + computerPractical
                    if(totalChemistryMarks >= 67.5 && totalPhysicsMarks >= 67.5 && totalComputerMarks >= 67.5 && maths >= 45){
                        return true
                    }
                }
                return false
            case "sc/st":
                if(physics >= 40 && maths >= 40 && chemistry >= 40 && computer>=40){
                    const totalPhysicsMarks = physics + physicsPractical
                    const totalChemistryMarks = chemistry + chemistryPractical
                    const totalComputerMarks = computer + computerPractical
                    if(totalChemistryMarks >= 60 && totalPhysicsMarks >= 60 && totalComputerMarks >= 60 && maths >= 40){
                        return true
                    }
                }
                return false
            default:
                return false
        }
    }
    

    return(
        <EligibiltyContext.Provider value={{checkFormValidity, CheckEligibilityForPCMCoTheoryAndPractical}}>
            {props.children}
        </EligibiltyContext.Provider>
    )
}

export default CheckEligibility