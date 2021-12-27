import "pinia"
import { Router } from "vue-router"
import { Dialog } from "./lib/dialog"
import { Notification } from "./lib/notification"

declare module "pinia" {
  export interface PiniaCustomProperties {
    dialog: Dialog
    router: Router
    notification: Notification
  }
}
