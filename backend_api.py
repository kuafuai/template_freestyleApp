# Backend API endpoints for handling the login, product management, and customer management requests

# Login endpoint
@app.route("/login", methods=["POST"])
def login():
    # Get the username and password from the request
    username = request.form.get("username")
    password = request.form.get("password")
    
    # Validate the username and password
    if username == "admin" and password == "password":
        return jsonify({"message": "Login successful"})
    else:
        return jsonify({"message": "Login failed"})

# Product management endpoints
@app.route("/products", methods=["GET"])
def get_products():
    # Get the list of products from the database
    products = Product.query.all()
    
    # Return the list of products as a response
    return jsonify([product.serialize() for product in products])

@app.route("/products", methods=["POST"])
def add_product():
    # Get the product data from the request
    name = request.form.get("name")
    price = request.form.get("price")
    
    # Add the product to the database
    product = Product(name=name, price=price)
    db.session.add(product)
    db.session.commit()
    
    # Return a response indicating the success or failure of the operation
    return jsonify({"message": "Product added successfully"})

@app.route("/products/<product_id>", methods=["GET"])
def get_product(product_id):
    # Get the product with the specified ID from the database
    product = Product.query.get(product_id)
    
    # Return the product as a response
    if product:
        return jsonify(product.serialize())
    else:
        return jsonify({"message": "Product not found"})

@app.route("/products/<product_id>", methods=["PUT"])
def update_product(product_id):
    # Get the updated product data from the request
    name = request.form.get("name")
    price = request.form.get("price")
    
    # Update the product in the database
    product = Product.query.get(product_id)
    if product:
        product.name = name
        product.price = price
        db.session.commit()
        return jsonify({"message": "Product updated successfully"})
    else:
        return jsonify({"message": "Product not found"})

@app.route("/products/<product_id>", methods=["DELETE"])
def delete_product(product_id):
    # Delete the product with the specified ID from the database
    product = Product.query.get(product_id)
    if product:
        db.session.delete(product)
        db.session.commit()
        return jsonify({"message": "Product deleted successfully"})
    else:
        return jsonify({"message": "Product not found"})

# Customer management endpoints
@app.route("/customers", methods=["GET"])
def get_customers():
    # Get the list of customers from the database
    customers = Customer.query.all()
    
    # Return the list of customers as a response
    return jsonify([customer.serialize() for customer in customers])

@app.route("/customers", methods=["POST"])
def add_customer():
    # Get the customer data from the request
    name = request.form.get("name")
    email = request.form.get("email")
    
    # Add the customer to the database
    customer = Customer(name=name, email=email)
    db.session.add(customer)
    db.session.commit()
    
    # Return a response indicating the success or failure of the operation
    return jsonify({"message": "Customer added successfully"})

@app.route("/customers/<customer_id>", methods=["GET"])
def get_customer(customer_id):
    # Get the customer with the specified ID from the database
    customer = Customer.query.get(customer_id)
    
    # Return the customer as a response
    if customer:
        return jsonify(customer.serialize())
    else:
        return jsonify({"message": "Customer not found"})

@app.route("/customers/<customer_id>", methods=["PUT"])
def update_customer(customer_id):
    # Get the updated customer data from the request
    name = request.form.get("name")
    email = request.form.get("email")
    
    # Update the customer in the database
    customer = Customer.query.get(customer_id)
    if customer:
        customer.name = name
        customer.email = email
        db.session.commit()
        return jsonify({"message": "Customer updated successfully"})
    else:
        return jsonify({"message": "Customer not found"})

@app.route("/customers/<customer_id>", methods=["DELETE"])
def delete_customer(customer_id):
    # Delete the customer with the specified ID from the database
    customer = Customer.query.get(customer_id)
    if customer:
        db.session.delete(customer)
        db.session.commit()
        return jsonify({"message": "Customer deleted successfully"})
    else:
        return jsonify({"message": "Customer not found"})
