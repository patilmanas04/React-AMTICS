import React, { useRef, useState } from "react"
import styled from "styled-components"

const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 10px;
	max-width: 1000px;
	margin: 50px auto;
`

const Options = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`

const OptionWrapper = styled.div`
	width: 49%;
`

const Select = styled.select`
	width: 100%;
	padding: 10px;
	border: 0.8px solid #cccccc;
	border-radius: 4px;

	&:focus {
		outline: none;
		border: 0.8px solid #8b8b8b;
	}
`

const Option = styled.option`
	padding: 10px;
`

const FormHeading = styled.h2`
	font-size: 1.5rem;
	text-align: center;
	margin-top: 30px;
`

const HTMLForm = styled.form`
	width: 100%;
`

const FormTable = styled.div`
	width: 100%;
	border: 0.8px solid #cccccc;
	border-radius: 4px;
	font-weight: 500;

	@media (max-width: 300px){
		overflow-x: scroll;
	}
`

const TableHead = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 0.8px solid #cccccc;
	height: 50px;
	min-width: 300px;
`

const TableHeading = styled.h4`
	width: 50%;
	font-size: 1.05rem;
	padding: 10px 20px;
`

const TableBody = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 10px 0;
`

const TableRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
	min-width: 300px;
`

const TableCell = styled.div`
	width: 50%;
`

const Input = styled.input`
	padding: 10px;
	height: 40px;
	width: 70px;
	border: 0.8px solid #cccccc;
	border-radius: 4px;

	&::-webkit-inner-spin-button,
	&::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	appearance: textfield;
	-moz-appearance: textfield;

	&:focus {
		outline: none;
		border: 0.8px solid #8b8b8b;
	}
`

const CheckEligibilityButton = styled.button`
	align-self: flex-start;
	margin-top: 20px;
	padding: 10px;
	border-radius: 4px;
	background-color: #E21C34;
	color: white;
	border: none;
	cursor: pointer;
`

const Span = styled.span`
	margin-left: 10px;
	font-weight: normal;
`

const Form = () => {
	const [marks, setMarks] = useState({physics: "", maths: "", chemistry: "", computer: ""})
	const [formValidated, setFormvalidated] = useState(true)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		const {physics, maths, chemistry, computer} = marks

		if(physics == "" || maths == "" || chemistry == "" || computer == "" || parseInt(physics)>100 || parseInt(maths)>100 || parseInt(chemistry)>100 || parseInt(computer)>100 || parseInt(physics)<0 || parseInt(maths)<0 || parseInt(chemistry)<0 || parseInt(computer)<0){
			setFormvalidated(false)
			return
		}
		else{
			setFormvalidated(true)
		}

		const total = parseInt(physics) + parseInt(maths) + parseInt(chemistry) + parseInt(computer)
		const percentage = (total / 400) * 100
		if(parseInt(physics)>=40 && parseInt(maths)>=40 && parseInt(chemistry)>=40 && parseInt(computer)>=40 && percentage>=40){
			alert("You are eligible for the admission")
		}
		else{
			alert("You are not eligible for the admission")
		}
	}

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMarks({...marks, [e.target.name]: e.target.value})
	}

	return (
		<>
		<FormWrapper>
			<Options>
				<OptionWrapper>
					<Select name="exam" id="exam">
						<Option value="gujarat">Gujarat</Option>
					</Select>
				</OptionWrapper>
				<OptionWrapper>
					<Select name="category" id="category">
						<Option value="general">General</Option>
						<Option value="sebc">SEBC</Option>
						<Option value="sc">SC</Option>
						<Option value="st">ST</Option>
					</Select>
				</OptionWrapper>
			</Options>
			<FormHeading>
				Enter marks as per Gujarat Board Marksheet
			</FormHeading>
			<HTMLForm onSubmit={handleSubmit}>
				<FormTable>
					<TableHead>
						<TableHeading>Subject</TableHeading>
						<TableHeading>Marks</TableHeading>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>Physics</TableCell>
							<TableCell>
								<Input type="number" name="physics" id="physics" onChange={onChange} className={(!formValidated)?"error":""} required/><Span>/ 100</Span>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Maths</TableCell>
							<TableCell>
								<Input type="number" name="maths" id="maths" onChange={onChange} className={(!formValidated)?"error":""} required/><Span>/ 100</Span>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Chemistry</TableCell>
							<TableCell>
								<Input type="number" name="chemistry" id="chemistry" onChange={onChange} className={(!formValidated)?"error":""} required/><Span>/ 100</Span>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Computer</TableCell>
							<TableCell>
								<Input type="number" name="computer" id="computer" onChange={onChange} className={(!formValidated)?"error":""} required/><Span>/ 100</Span>
							</TableCell>
						</TableRow>
					</TableBody>
				</FormTable>
			<CheckEligibilityButton type="submit">Check Eligibility</CheckEligibilityButton>
			</HTMLForm>
		</FormWrapper>
		</>
	)
}

export default Form