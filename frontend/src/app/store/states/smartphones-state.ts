import { Injectable } from '@angular/core';
import {
  Action,
  Selector,
  State,
  StateContext,
} from '@ngxs/store';

import { AjouterSmartphone, SupprimerSmartphone } from "../actions/smartphone-action";
import { SmartphoneStateModel } from './smartphone-state-model';
import { Smartphone } from "../../pages/smartphones/models/smartphone";

@State<SmartphoneStateModel>({
  name: 'smartphones',
  defaults: {
    smartphones: []
  }
})
@Injectable()
export class SmartphoneState {
  @Selector()
  static getSmartphones(state: SmartphoneStateModel) {
    return state.smartphones;
  }

  @Action(AjouterSmartphone)
  ajouterSmartphone(
    { getState, patchState }: StateContext<SmartphoneStateModel>,
    { payload }: AjouterSmartphone
  ) {
    const state = getState();
    patchState({
      smartphones: [...state.smartphones, payload]
    });
  }

  @Action(SupprimerSmartphone)
  supprimerSmartphone(
    { getState, patchState }: StateContext<SmartphoneStateModel>,
    { payload }: SupprimerSmartphone
  ) {
    patchState({
      smartphones: getState().smartphones.filter((s: Smartphone) => s.id !== payload.id)
    });
  }
}
