declare const expect: <T>(value: T) => void
import xf = require('../xfetch')
import { XFetch, XResponsePromise, HTTPError } from '../xfetch.base'

expect<XResponsePromise>(xf.get(''))
expect<Promise<string>>(xf.get('').text())
expect<XFetch>(xf.create(fetch))
expect<Promise<number>>(xf.get('').json(() => 1))
expect<Promise<HTTPError>>(xf.get('').catch(e => e))
