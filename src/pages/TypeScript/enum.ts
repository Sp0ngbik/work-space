enum TsMembers {
  Vlad,
  Dasha,
  Lena,
}

const tsMember = TsMembers.Vlad;
const tsIndexMember = TsMembers[1];

console.log(tsMember);
console.log(tsIndexMember);

enum tsSocial {
  vk = "vk",
  ints = "ints",
  face = "face",
}

const firstTsSocial = tsSocial.vk;
const secondTsSocial = tsSocial;
console.log(firstTsSocial);
console.log(secondTsSocial);
