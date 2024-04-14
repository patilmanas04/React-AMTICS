import { useState } from "react"
import EligibiltyContext from "./CheckEligibility"

interface Marks {
    physics: number,
    maths: number,
    chemistry: number,
    [key: string]: number
}

interface PracticalMarks{
    physics: number,
    chemistry: number,
    [key: string]: number
}

interface EligibilityContextProps{
    CheckEligibilityForPCMTheory: (marks: Marks, category: String) => boolean,
    CheckEligibilityForPCMTheoryAndPractical: (practicalMarks: PracticalMarks, category: String) => boolean,
    CheckEligibilityForPMCoTheoryAndPractical: (theoryMarks: number, practicalMarks: number, category: String) => boolean
}

const CheckEligibility = (props: any) => {
    const [savedMarks, setSavedMarks] = useState({physics: 0, maths: 0, chemistry: 0})

    // 1st Case: PCM Theory Eligibility
    const CheckEligibilityForPCMTheory = (marks: Marks, category: String) => {
        setSavedMarks(marks)

        switch(category){
            case "general":
                if(savedMarks.physics >= 40 && savedMarks.maths >= 40 && savedMarks.chemistry >= 40){
                    return true
                }
                return false
            case "sebc":
                if(savedMarks.physics >= 40 && savedMarks.maths >= 40 && savedMarks.chemistry >= 40){
                    return true
                }
                return false
            case "sc/st":
                if(savedMarks.physics >= 45 && savedMarks.maths >= 45 && savedMarks.chemistry >= 45){
                    return true
                }
                return false
            default:
                return false
        }
    }

    // 2nd Case: PCM Theory + Practical Eligibility
    const CheckEligibilityForPCMTheoryAndPractical = (practicalMarks: PracticalMarks, category: String) => {
        setSavedMarks({...savedMarks, ["physics"]: savedMarks.physics + practicalMarks.physics, ["chemistry"]: savedMarks.chemistry + practicalMarks.chemistry})

        switch(category){
            case "general":
                if(savedMarks.physics >= 60 && savedMarks.maths >= 40 && savedMarks.chemistry >= 60){
                    return true
                }
                return false
            case "sebc":
                if(savedMarks.physics >= 60 && savedMarks.maths >= 40 && savedMarks.chemistry >= 60){
                    return true
                }
                return false
            case "sc/st":
                if(savedMarks.physics >= 67.5 && savedMarks.maths >= 45 && savedMarks.chemistry >= 67.5){
                    return true
                }
                return false
            default:
                return false
        }
    }

    // 3rd Case: PMCo Theory + Practical Eligibility
    const CheckEligibilityForPMCoTheoryAndPractical = (theoryMarks: number, practicalMarks: number, category: String) => {
        const coTotalMarks = theoryMarks + practicalMarks

        switch(category){
            case "general":
                if(savedMarks.physics >= 60 && savedMarks.maths >= 40 && savedMarks.chemistry >= 60 && coTotalMarks >= 60){
                    return true
                }
                return false
            case "sebc":
                if(savedMarks.physics >= 60 && savedMarks.maths >= 40 && savedMarks.chemistry >= 60 && coTotalMarks >= 60){
                    return true
                }
                return false
            case "sc/st":
                if(savedMarks.physics >= 67.5 && savedMarks.maths >= 45 && savedMarks.chemistry >= 67.5 && coTotalMarks >= 60){
                    return true
                }
                return false
        }
    }  

    return(
        <EligibiltyContext.Provider value={}>
            {props.children}
        </EligibiltyContext.Provider>
    )
}