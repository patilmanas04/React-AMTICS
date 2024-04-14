import React, { useContext, useEffect, useRef, useState } from 'react'
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'
import EligibiltyContext from '../../contexts/EligibilityContext'

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
	padding: 10px 0;
	min-width: 300px;
`

const TableCell = styled.div`
	width: 50%;
	padding: 0 20px;
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

	&:hover{
		background-color: #C7001E;
	}
`

const Span = styled.span`
	margin-left: 10px;
	font-weight: normal;
`

const FormPCMTheoryAndPractical = (props) => {
	const { marks, setMarks, category } = props

	const navigate = useNavigate()

	const context = useContext(EligibiltyContext)

	const { CheckEligibilityForPCMTheoryAndPractical } = context

	const categoryRef = useRef(null)

	const [practicalMarks, setPracticalMarks] = useState({physics: 0, chemistry: 0})
	const [currentMarks, setCurrentMarks] = useState({physics: 0, maths: 0, chemistry: 0})
	const [formValidated, setFormvalidated] = useState(true)

	const onChange = (e) => {
		setPracticalMarks({...practicalMarks, [e.target.name]: e.target.value})
		setCurrentMarks({...currentMarks, [e.target.name]: marks[e.target.name] + parseInt(e.target.value)})
	}

	useEffect(() => {
		categoryRef.current.value = category
		setCurrentMarks(marks)
	}, [])

	const handleSubmit = (e) => {
		e.preventDefault()

		const {physics, chemistry} = practicalMarks

		if(physics == "" ||chemistry == "" || physics>50 || chemistry>50 || physics<0 || chemistry<0){
			setFormvalidated(false)
			return
		}
		else{
			setFormvalidated(true)
		}

		console.log(currentMarks)

		const category = categoryRef.current.value

		const isEligible = CheckEligibilityForPCMTheoryAndPractical(currentMarks, category)

		if(isEligible){
			alert("You are eligible for the admission")
		}
		else{
			navigate("/pmcotheoryandpractical")
		}
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
				<Select name="category" id="category" ref={categoryRef} disabled>
					<Option value="general">General</Option>
					<Option value="sebc">SEBC</Option>
					<Option value="sc/st">SC/ST</Option>
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
						<TableHeading>Practicals Marks</TableHeading>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>Physics</TableCell>
							<TableCell>
								<Input type="number" name="physics" id="physics" onChange={onChange} className={(!formValidated)?"error":""} required /><Span>/ 50</Span>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Chemistry</TableCell>
							<TableCell>
								<Input type="number" name="chemistry" id="chemistry" onChange={onChange} className={(!formValidated)?"error":""} required /><Span>/ 50</Span>
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

export default FormPCMTheoryAndPractical