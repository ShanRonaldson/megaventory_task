6 July 2021

TASK INFORMATION

In the attached JSON file you will find the response of a PurchaseOrderGet call to our API, containing an array of mvPurchaseOrders.

1. The first goal of this project is to parse the orders and display them as links in a list.

    Each list element’s text should follow this format:

        { PurchaseOrderTypeAbbreviation } – { PurchaseOrderNo }

2. Clicking each order should open a window which displays some information related to the order.

    The fields you need to include in this window are:

        { PurchaseOrderAddress }

        { PurchaseOrderContactPerson }

        { PurchaseOrderStatus }

        { PurchaseOrderDetails } - For this field you should create a table with rows equal to the PurchaseOrderDetails array length, filled with this information:

                PurchaseOrderDetails.PurchaseOrderRowProductSKU (as Product SKU)
                PurchaseOrderDetails.PurchaseOrderRowQuantity (as Quantity Ordered)
                PurchaseOrderDetails.PurchaseOrderRowUnitPriceWithoutTaxOrDiscount (as Unit Price)
                PurchaseOrderDetails.PurchaseOrderRowTotalAmount (as Total Amount)




PLANNED STEPS:

1. Set up React app, create Git repository.
2. Set up how the index.html page will look, basic CSS and layout.
3. Split the layout into 4 sections:
        i. Header; with document name and created by.
        ii. Footer.
        iii. table which displays the purchase orders.
        iv. window that pops up when table entry is clicked; all in tabular format? or laid out like SAP.
4. Parse JSON object to be used (import).
5. Fixes and neatening up of layout and format.


Resources used:

Create React Router (guide):
https://reactrouter.com/web/guides/quick-start (used to ensure I was doing it correctly, as I had used it previously)

Allow transitions in React Router (npm):
https://www.npmjs.com/package/react-transition-group (also as above, used to ensure I was doing it correctly)

React FontAwesome (guide):
https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react (Used to ensure FontAwesome worked correctly)


Load and render JSON data into react-components (guide) : https://www.pluralsight.com/guides/load-and-render-json-data-into-react-components

how to parse json file (stackoverflow):
https://stackoverflow.com/questions/33650399/es6-modules-implementation-how-to-load-a-json-file/33650470#33650470


how to create a modal (npm + guide):
https://www.npmjs.com/package/react-modal

click on overlay of modal to close (guide):
https://codepen.io/claydiffrient/pen/woLzwo?editors=0010

html table elements: 
https://www.w3schools.com/html/html_tables.asp (to check I had all the table elements)