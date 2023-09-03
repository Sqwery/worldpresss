

let successful = []

let unSuccessful = []

let taxes = Number

let taxesMax = {}

let taxesMin = {}



let bank = [

{

name: 'Apple',

budget: 1000000,

tax: 28,

expensesPerYear: [

{ title: 'Salaries', total: 125000 },

{ title: 'Utilites', total: 18000, },

{ title: 'Rent', total: 258000 }

]

},

{

name: 'Microsoft',

budget: 988000,

tax: 21,

expensesPerYear: [

{

title: 'Salaries',

total: 148000

},

{

title: 'Utilites',

total: 124000,

},

{

title: 'Rent',

total: 314000

}

]

},

{

name: 'HP',

budget: 609000,

tax: 14,

expensesPerYear: [

{

title: 'Salaries',

total: 414000

},

{

title: 'Utilites',

total: 19000,

},

{

title: 'Rent',

total: 114400

}

]

},

{

name: 'Xiomi',

budget: 889500,

tax: 17,

expensesPerYear: [

{

title: 'Salaries',

total: 318000

},

{

title: 'Utilites',

total: 14000,

},

{

title: 'Rent',

total: 169000

}

]

},

{

name: 'Samsung',

budget: 889500,

tax: 12,

expensesPerYear: [

{

title: 'Salaries',

total: 650400

},

{

title: 'Utilites',

total: 29000,

},

{

title: 'Rent',

total: 212000

}

]

},

]

const setup = () => {
    bank.forEach(company => {
        let totalExpenses = 0;
        company.expensesPerYear.forEach(expense => {
          totalExpenses += expense.total;
        });
        company.expensesPerMonth = totalExpenses / 12;
      });
      

      
      bank.forEach(company => {
        company.procent = (company.expensesPerMonth / company.budget) * 100;
      });
      

      
      bank.forEach(company => {
        let netIncome = company.budget - (company.budget * (company.tax / 100));
        if (netIncome > 0) {
          successful.push(company);
        } else {
          unSuccessful.push(company);
        }
      });
      

      
      taxes = bank.reduce((total, company) => {
        return total + (company.budget * (company.tax / 100));
      }, 0);
      

      
      taxesMax = bank.reduce((max, company) => {
        return company.tax > max.tax ? company : max;
      }, bank[0]);
      
      taxesMin = bank.reduce((min, company) => {
        return company.tax < min.tax ? company : min;
      }, bank[0]);
      

      
      bank.forEach(company => {
        let totalExpenses = 0;
        company.expensesPerYear.forEach(expense => {
          totalExpenses += expense.total;
        });
        let totalTaxes = company.budget * (company.tax / 100);
        company.totalMoney = company.budget - totalExpenses - totalTaxes;
      });
}

setup(
  
)

console.log('Месячные траты:');
console.log(bank);

console.log('Процент трат:');
bank.forEach(company => {
  console.log(`${company.name}: ${company.procent.toFixed(2)}%`);
});

console.log('Успешные компании:');
console.log(successful);

console.log('Неуспешные компании:');
console.log(unSuccessful);

console.log('Общие налоги:');
console.log(taxes);

console.log('Компания с максимальным налогом:');
console.log(taxesMax);

console.log('Компания с минимальным налогом:');
console.log(taxesMin);

console.log('Остаток денег после вычета налогов и трат:');
bank.forEach(company => {
  console.log(`${company.name}: ${company.totalMoney}`);
});
