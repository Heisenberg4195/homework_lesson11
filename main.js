//Ex1.1
const getArray = (string, frequency) => {
  const arr = []
  for (let i = 0; i < frequency; i++) {
    arr.push(string)
  }
  return arr
}

//Ex1.2
const getArray = (string, frequency) => {
  const arr = []
  let i = 0
  while (i < frequency) {
    arr.push(string)
    i++
  }
  return arr
}

//Ex2
const reverseArray = () => {
  const newArray = []
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i])
  }
  return newArray
}

//Ex3
const arr = [0, 1, false, 2, undefined, '', 3, null]
const getNumArray = (arr) => {
  return arr.filter (Boolean)
}

//Ex4
const creatObj = (arr = []) => {
  const newObj = {}
  arr.forEach(item => {
    newObj[item [0]] = item [1]
  })
  return newObj
}


//Ex 5
const arr = [6, 4, 0, 3, -2, 1]
const sortNum = arr => arr.sort()

// Ex6
const checkTypes = obj => {
  if (Array.isArray (obj) || typeof obj !== 'object') {
    return false
  } else {
    return true
  }
}


//Ex8
const getItem = (arr = []) => {
  if (arr.length < 5) return
  arr.splice(1, 2)
  return arr
}

//Ex9
const checkStudent = students => {
  const getStudentPass = []
  students.forEach(student => {
    if (student.score > 5 && student.name.indexOf('Duy') === -1) {
      getStudentPass.push('Pass')
    } else {
      getStudentPass.push('Fail')
    }
  })
  return getStudentPass
}
