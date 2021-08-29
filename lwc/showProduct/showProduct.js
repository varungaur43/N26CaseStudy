import { LightningElement, api } from 'lwc';
import getProduct from '@salesforce/apex/getContactProduct.getProduct';
import { RecordFieldDataType } from 'lightning/uiRecordApi';

export default class ShowProduct extends LightningElement {
    error;
    @api recordId;
    products = [];
    connectedCallback(){
        getProduct({caseId: this.recordId })
        .then(result => {
            this.products = result;
            this.error = undefined;
            console.log(result);
        })
        .catch(error => {
            this.error = error;
            this.products = undefined;
        });
        

    }
    

}