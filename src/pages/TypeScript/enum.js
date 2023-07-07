var TsMembers;
(function (TsMembers) {
    TsMembers[TsMembers["Vlad"] = 0] = "Vlad";
    TsMembers[TsMembers["Dasha"] = 1] = "Dasha";
    TsMembers[TsMembers["Lena"] = 2] = "Lena";
})(TsMembers || (TsMembers = {}));
var tsMember = TsMembers.Vlad;
var tsIndexMember = TsMembers[1];
console.log(tsMember);
console.log(tsIndexMember);
var tsSocial;
(function (tsSocial) {
    tsSocial["vk"] = "vk";
    tsSocial["ints"] = "ints";
    tsSocial["face"] = "face";
})(tsSocial || (tsSocial = {}));
var firstTsSocial = tsSocial.vk;
var secondTsSocial = tsSocial;
console.log(firstTsSocial);
console.log(secondTsSocial);
