class flight:
    counter= 1
    def __init__(self,origin,destination,duration):
        self.id=flight.counter
        flight.counter +=1
        self.origin=origin
        self.destination=destination
        self.duration=duration
        self.passengers=[]  ## empty list asign 
        
        ## adding passengers
    def add_passenger(self, p):
        self.passengers.append(p)
        p.flight_id=self.id   
    
    def flight_info(self):
        print(f"flight number: {self.id}")
        print(f"flight origin: {self.origin}")
        print(f"flight destination: {self.destination}")
        print(f"flight duration : {self.duration}")

        print("\n")
        print("Passengers:")
        for passenger in self.passengers:
            print(f"passenger name: {passenger.name}")
            print(f"passenger fight number: {passenger.flight_id}")


class Passenger:

    def __init__(self,name):
        self.name=name

# flight object creation 
f1=flight("kolkata","delhi",570)
f2=flight("pune","new york",950)

# passenger object 

soumyadip=Passenger("soumyadip")
julia=Passenger("Julia")
Tapu=Passenger("Tapu")

## sending passenger object for adding in passenger list 
f2.add_passenger(soumyadip)
f2.add_passenger(julia)

f1.add_passenger(Tapu)

f1.flight_info()

f2.flight_info()

    