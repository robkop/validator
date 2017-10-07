# validator
Simple JavaScript validator 

# methods
str.isEmail()
Returns true if string is a valid e-mail address. Returns false if string is a invalid e-mail address. 

str.isPassword(num)
Takes a number of req characters.
Returns true is str.length >= num.
TODO: params: special characters

str.isNRB()
Checks Polish IBAN bank account numer.
Trims, removes whitespaces and removes non digit chars.
Returns obj: 
- "ok" boolean, if string is valid "true", if not "false"
- "desc" string with description 
- "bankName'
