const date = "202302";
period = "m";

const url = new URL('https://bank.gov.ua/NBUStatService/v1/statdirectory/inflation');

url.searchParams.append("date", date);
url.searchParams.append("period", period);
url.searchParams.append("json", "");

console.log(url.href);