// ts 5.0 feature

const BaseValue = 10;
const Prefix = "/data";
var Values; // 12
(function (Values) {
  Values[Values["First"] = 10] = "First";
  Values[Values["Second"] = 11] = "Second";
  Values[Values["Third"] = 12] = "Third";
})(Values || (Values = {}));
const xxx = 100 + Values.First;
const yyy = xxx;
var Routes;
(function (Routes) {
  Routes["Parts"] = "/data/parts";
  Routes["Invoices"] = "/data/invoices";
  Routes["x"] = "10/x";
  Routes["y"] = "110/y";
})(Routes || (Routes = {}));
