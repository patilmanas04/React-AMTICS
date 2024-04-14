import EligibiltyContext from "./EligibilityContext"

const CheckEligibility = (props) => {
    // 1st Case: PCM Theory Eligibility
    const CheckEligibilityForPCMTheory = (marks, category) => {
        switch(category){
            case "general":
                if(marks.physics >= 45 && marks.maths >= 45 && marks.chemistry >= 45){
                    return true
                }
                return false
            case "sebc":
                if(marks.physics >= 45 && marks.maths >= 45 && marks.chemistry >= 45){
                    return true
                }
                return false
            case "sc/st":
                if(marks.physics >= 40 && marks.maths >= 40 && marks.chemistry >= 40){
                    return true
                }
                return false
            default:
                return false
        }
    }

    // 2nd Case: PCM Theory + Practical Eligibility
    const CheckEligibilityForPCMTheoryAndPractical = (theoryAndPracticalMarks, category) => {
        const {physics, maths, chemistry} = theoryAndPracticalMarks

        switch(category){
            case "general":
                if(physics >= 67.5 && maths >= 45 && chemistry >= 67.5){
                    return true
                }
                return false
            case "sebc":
                if(physics >= 67.5 && maths >= 45 && chemistry >= 67.5){
                    return true
                }
                return false
            case "sc/st":
                if(physics >= 60 && maths >= 40 && chemistry >= 60){
                    return true
                }
                return false
            default:
                return false
        }
    }

    // 3rd Case: PMCo Theory + Practical Eligibility
    const CheckEligibilityForPMCoTheoryAndPractical = (theoryAndPracticalMarks, category) => {
        const {theoryMarks, practicalMarks} = theoryAndPracticalMarks
        const coTotalMarks = theoryMarks + practicalMarks
        switch(category){
            case "general":
                if(theoryMarks>=45 && coTotalMarks >= 67.5){
                    return true
                }
                return false
            case "sebc":
                if(theoryMarks>=45 && coTotalMarks >= 67.5){
                    return true
                }
                return false
            case "sc/st":
                if(theoryMarks>=40 && coTotalMarks >= 60){
                    return true
                }
                return false
        }
    }

    return(
        <EligibiltyContext.Provider value={{CheckEligibilityForPCMTheory, CheckEligibilityForPCMTheoryAndPractical, CheckEligibilityForPMCoTheoryAndPractical}}>
            {props.children}
        </EligibiltyContext.Provider>
    )
}

export default CheckEligibility