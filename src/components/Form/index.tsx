import styled from "styled-components"

const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 10px;
	max-width: 1000px;
	margin: 0 auto;
	background-color: red;
`

const Options = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`

const OptionWrapper = styled.div`
	width: 45%;
`

const Select = styled.select`
	width: 100%;
	padding: 10px;
`

const Option = styled.option`
	padding: 10px;
`

const FormHeading = styled.h2`
	font-size: 1.5rem;
`

const FromTable = styled.table`
	width: 100%;
`

const TableHead = styled.thead`
`

const TableRow = styled.tr`
`

const TableHeadCell = styled.th`
	padding: 10px;
`

const TableBody = styled.tbody`
`

const TableCell = styled.td`
	padding: 10px;
`

const Input = styled.input`
	padding: 5px;
`

const CheckEligibilityButton = styled.button`
	padding: 10px;
	margin-top: 10px;
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
			<FromTable>
				<TableHead>
					<TableRow>
						<TableHeadCell>
							Subject
						</TableHeadCell>
						<TableHeadCell>
							Theory Marks
						</TableHeadCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell>
							Physics
						</TableCell>
						<TableCell>
							<Input type="number" placeholder="Enter marks" />/100
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							Maths
						</TableCell>
						<TableCell>
							<Input type="number" placeholder="Enter marks" />/100
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							Chemistry
						</TableCell>
						<TableCell>
							<Input type="number" placeholder="Enter marks" />/100
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							Computer
						</TableCell>
						<TableCell>
							<Input type="number" placeholder="Enter marks" />/100
						</TableCell>
					</TableRow>
				</TableBody>
			</FromTable>
			<CheckEligibilityButton>Check Eligibility</CheckEligibilityButton>
		</FormWrapper>
		</>
	)
}

export default Form