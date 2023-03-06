export class Storage {
  private privatePreKey: string
  // All add project private prefix key
  constructor(name:string) {
    this.privatePreKey = name ? name + '_' : ''
  }
  get<T>(key: string): T | null | string {
    if (!key) return null
    let value = window.localStorage.getItem(this.privatePreKey + key)
    try {
      value = JSON.parse(value!)
      return value
    } catch (e) {
      return value
    }
  }

  set(key: string, value: any) {
    if (!key) return
    if (Object.prototype.toString.call(value) === '[object Object]') {
      value = JSON.stringify(value)
    }
    window.localStorage.setItem(this.privatePreKey + key, value)
  }

  remove(key: string) {
    if (!key) return
    window.localStorage.removeItem(this.privatePreKey + key)
  }
}

