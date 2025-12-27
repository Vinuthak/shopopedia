import { db } from '../utility/firebaseConfig'
import { collection, addDoc, getDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore'

/* addDoc = method to invoke when we want to create something in the firestore.
getDoc = retrieve one product
getDocs = retrieve products in plural
doc = to use the reference 
adding product to db:
defining collection is the first step.
collection takes two arguments- db and name of the collection- 'products' is like a table name in sql

*/

const productCollection = collection(db, 'products')

export default {
  async createProduct(productData) {
    const docRef = await addDoc(productCollection, productData)
    return { id: docRef.id, ...productData }
  },
}
