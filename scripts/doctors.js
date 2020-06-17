
const makeAdoc = (phyName, phySpecialty, phyAddress) => {
    return {
        name: phyName,
        specialty: phySpecialty,
        address: phyAddress
    }
}

const doctor = makeAdoc("Dr. Bones McCoy", "Internal Medicine", "1203 Carothers Pkwy; Franklin, TN 37067")
document.querySelector(".doctors").innerHTML=`
    <section>
        Name: ${doctor.name}<br>
        Specialty: ${doctor.specialty}<br>
        Address: ${doctor.address}
    </section>
`
