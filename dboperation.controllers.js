import AdminModel from './admin.models.js';
import PaymentModel from './paymnet.models.js';
import AccountModel from "./accounts.model.js";

const addSampleAdminData = async function addSampleAdminData() {
    try {
        console.log("ram")
        const adminData = [
            { username: 'admin13', password: 'admin123', email: 'admin13@example.com' },
            { username: 'admin14', password: 'admin456', email: 'admin14@example.com' }
        ];
        await AdminModel.create(adminData);
        console.log("Sample admin data added to server DB successfully!");
    } catch (error) {
        console.error("Error adding sample admin data to server DB:", error);
    }
}

const addSamplePaymentData = async function addSamplePaymentData() {
    try {
        const paymentData = [
            { payment_id: 'pay123', amount: 1000 },
            { payment_id: 'pay456', amount: 2000 }
        ];
        await PaymentModel.create(paymentData);
        console.log("Sample payment data added to client DB successfully!");
    } catch (error) {
        console.error("Error adding sample payment data to client DB:", error);
    }
}

const addSampleAccountData = async function addSampleAccountData() {
    try {
        const accountData = [
            { account_number: "delhi786", balance: 1120245 },
            { account_number: "delhi759", balance: 1121545 }
        ];
        await AccountModel.create(accountData);
        console.log("Sample account data added to client DB successfully!");
    } catch (error) {
        console.error("Error adding sample payment data to client DB:", error);
    }
}


export { addSampleAdminData, addSamplePaymentData, addSampleAccountData };