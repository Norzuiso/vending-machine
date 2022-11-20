import {Constants} from "./Constants";

export function isValueWaitingMessage(value: string) {
  return value == Constants.WAITING_MESSAGE_STATUS;
}

export function isValueErrorNoValues(value: string) {
  return value == Constants.ERROR_NO_VALUES;
}

export function isValueDeliverProduct(value: string) {
  return value == Constants.DELIVER_PRODUCT;
}

export function isValueLengthOne(value: string) {
  return value.length == 1;
}

export function isValueInConstants(value: string) {
  return Object.values(Constants).some((v) => v === value);
}

export function showMessageErrorOrInputText(value: string, inputText: string) {
  if (isValueInConstants(value)) {
    return value
  }

  return inputText
}
