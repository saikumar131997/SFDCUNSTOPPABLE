import { LightningElement } from 'lwc';

export default class FindRep extends LightningElement {
    handleClaimChange(event)
    {
         this.text=event.target.value;
    }
}