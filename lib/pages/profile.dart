import 'dart:html';

import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';

import '../components/Input.dart';

class Profile extends StatelessWidget {

  final String createUser = """
    mutation createUser(\$id: ID){
      createUser(_id:\$id){
        username
        email
        _id
      }
    }
  """;

  final String updateUser = """
    mutation updateUser(\$id: ID){
      updateUser(_id:\$id){
        username
        email
        _id
      }
    }
  """;

  final Boolean isPut;

  const Profile(this.isPut)

  TextEditingController controllerName;
  TextEditingController controllerLastName;
  TextEditingController controllerPhone;

  @override
  void initState() {
    controllerName = new TextEditingController();
    controllerSurname = new TextEditingController();
    controllerPhone = new TextEditingController();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Crear/editar usuario"),
      ),
      body: ListView(
          children: [
            InputField(controllerName, "Nombre"),
            InputField(controllerLastName, "Apellido"),
            InputField(controllerPhone, "Telefono"),
            Mutation(
              options: MutationOptions(
                document: gql(isPut?updateUser:createUser),
              ),
              builder: (RunMutation runMutation, result){
                return ElevatedButton(
                  onPressed: () {
                    runMutation({
                      "input":{
                        "username":controllerName.text,
                        "lastName":controllerLastName.text,
                        "phone":controllerPhone.text
                      }
                    });

                    Navigator.pop(context)
                  },
                  child: Text("Guardar")
                );
              },
            ),
          ],
        ));
    );
  }
}

