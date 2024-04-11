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
`

const Option = styled.option`
	padding: 10px;
`

const FormHeading = styled.h2`
	font-size: 1.5rem;
	text-align: center;
	margin-top: 30px;
`

const FormTable = styled.form`
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
			<FormTable>
				<TableHead>
					<TableHeading>Subject</TableHeading>
					<TableHeading>Marks</TableHeading>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell>Physics</TableCell>
						<TableCell>
							<Input type="number" name="physics" id="physics" /><Span>/ 100</Span>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Maths</TableCell>
						<TableCell>
							<Input type="number" name="maths" id="maths" /><Span>/ 100</Span>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Chemistry</TableCell>
						<TableCell>
							<Input type="number" name="chemistry" id="chemistry" /><Span>/ 100</Span>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Computer</TableCell>
						<TableCell>
							<Input type="number" name="computer" id="computer" /><Span>/ 100</Span>
						</TableCell>
					</TableRow>
				</TableBody>
			</FormTable>
			<CheckEligibilityButton type="button">Check Eligibility</CheckEligibilityButton>
		</FormWrapper>
		</>
	)
}

export default Form