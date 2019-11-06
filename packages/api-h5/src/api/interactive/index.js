import Toast from './Toast'
import Modal from './Modal'

let toast = null
let modal = null

function showToast (options = {}) {
  if (!toast) { toast = new Toast() }
  toast.show(options, 'toast')
}

function hideToast (options = {}) {
  if (!toast) { return }
  toast.hide(Object.assign({ duration: 0 }, options), 'toast')
}

function showLoading (options = {}) {
  if (!toast) { toast = new Toast() }
  toast.show(Object.assign({
    icon: 'loading',
    duration: -1
  }, options), 'loading')
}

function hideLoading (options = {}) {
  if (!toast) { return }
  toast.hide(Object.assign({
    icon: 'loading',
    duration: 0
  }, options), 'loading')
}

function showModal (options = {}) {
  if (!modal) { modal = new Modal() }
  modal.show(options)
}

export {
  showToast,
  hideToast,
  showLoading,
  hideLoading,
  showModal
}
