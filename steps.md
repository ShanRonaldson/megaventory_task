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