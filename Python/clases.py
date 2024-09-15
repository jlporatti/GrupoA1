class Persona:
    def __init__(self, eMail,nombre,formaPago):
        self.EMail = eMail
        self.Nombre = nombre
        self.FormaPago = formaPago
        self.Activo = True

    def __str__(self):
        return f"eMail: {self.EMail}, Nombre: {self.Nombre}, Forma de Pago: {self.FormaPago}, Activo: {self.Activo}"

class Direccion:
    def __init__(self, direccion1, direccion2, barrio, telefono):
        self.Direccion1 = direccion1
        self.Direccion2 = direccion2
        self.Barrio = barrio
        self.Telefono = telefono
        self.Activo = True

    def __str__(self):
        return f"Dirección: {self.Direccion1} - {self.Direccion2} - {self.Barrio} Telefono: {self.Telefono} Activo: {self.Activo}"

class Pedido(Persona,Direccion):
    def __init__(self, email, nombre, formaPago, direccion1, direccion2, barrio, telefono, aclaracion, detalle):
        super().__init__(email, nombre, formaPago)
        super(). __init__(self, direccion1, direccion2, barrio, telefono)
        self.Aclaracion= aclaracion
        self.Detalle = detalle
    def __str__(self):
        return super().__str__()

