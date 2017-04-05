export default class Helpers {
  static transformObj(original, values) {
    if (typeof values !== 'object') return original

    let temp = {}
    values.forEach(value => {
      if (typeof value === 'object') {
        if (Array.isArray(original[value.attribute])) {
          temp[value.attribute] = this.transformArray(original[value.attribute], value.fields)
        } else {
          temp[value.attribute] = this.transformObj(original[value.attribute], value.fields)
        }
      } else if (original[value] !== undefined) {
        temp[value] = original[value]
      }
    })

    return temp
  }

  static transformArray(original, values) {
    if (typeof values !== 'object') return original

    let temp = []
    for (let i = 0; i < original.length; i++) {
      temp.push(this.transformObj(original[i], values))
    }

    return temp
  }
}
