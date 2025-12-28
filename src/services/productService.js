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
  async getProducts() {
    const snapShot = await getDocs(productCollection)
    return snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  },

  //retrieves single productId using doc()
  async getProductById(id) {
    const docRef = doc(db, 'products', id)
    const snapshot = await getDoc(docRef)
    return { id: snapshot.id, ...snapshot.data() }
  },
  async updateProduct(id, productData) {
    const docRef = doc(db, 'products', id)
    await updateDoc(docRef, productData)
    return { id, ...productData }
  },
  async deleteProduct(id) {
    const docRef = doc(db, 'products', id)
    await deleteDoc(docRef)
  },
}
