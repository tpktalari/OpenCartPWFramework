import {test, expect} from '../src/fixtures/pagefixtures';
import { CsvHelper } from '../src/utils/CsvHelper';
import { ExcelHelper } from '../src/utils/ExcelHelper';
import { JsonHelper } from '../src/utils/JsonHelper';


test.beforeEach(async ({registerpage})=> {
    await registerpage.goToRegisterPage();
})


let testData = CsvHelper.readCsv('src/testdata/registerData.csv');
for(let row of testData){
    test(`Register Multiple User Test - ${row.FirstName} ${row.LastName}`, async({registerpage})=>{
        await registerpage.register(row.FirstName, row.LastName, row.Email, row.Telephone, row.Password, row.ConfirmPassword, row.Newsletter);
        expect(await registerpage.isRegistrationSuccess()).toBeTruthy();
    })
}

test('Register User with valid data', async({registerpage})=>{
    await registerpage.register('John', 'Smith', `john${Date.now()}@test.com`, '9876543210', 'Test@1234', 'Test@1234', 'Yes');
    expect(await registerpage.isRegistrationSuccess()).toBeTruthy();

})


// Using ExcelHelper to read data from Excel file
let excelData = ExcelHelper.readExcel("src/testdata/testdataReg.xlsx", "testdataReg");

for(let row of excelData){
    test(`Registe Multiple User Test From Excel - ${row.firstname} ${row.lastname}`, async({registerpage})=>{
        await registerpage.register(row.firstname, row.lastname, row.email, row.telephone, row.password, row.confirmpassword, row.newsletter);
        expect(await registerpage.isRegistrationSuccess()).toBeTruthy();
    })
}

// Using JSONHelper to read data from JSON file
let jsonData = JsonHelper.readJson("src/testdata/testDataReg.json");

for(let row of jsonData){
    
    test(`Regitser Multiple User Test From Json - ${row.firstname} ${row.lastname}`, async({registerpage})=>{
        await registerpage.register(row.firstname, row.lastname, row.email, row.telephone, row.password, row.confirmpassword, row.newsletter);
        expect(await registerpage.isRegistrationSuccess()).toBeTruthy();
    })
}



