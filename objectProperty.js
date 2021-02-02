const students = [
    {id:21, name:"shakil khan"},
    {id:11, name:"shakib khan"},
    {id:41, name:"azad khan"},
    {id:12, name:"Azam Molla"}
]
const unique = [];
                        // find return only the first matching elements.
for (let i = 0; i < students.length; i++) {
    const objects = students[i];
    unique.push(objects.name);
    unique.push(objects.id);
    
}
const names = students.map(s => s.id)
const name = students.find(s => s.id >39);
console.log(names,name);