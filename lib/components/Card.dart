import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';


class CardUser extends StatelessWidget {

  final String deleteUser = """
    mutation deleteUser(\$id: ID){
      deleteUser(_id:\$id){
        username
        email
        _id
      }
    }
  """;

  final String name;
  final String email;
  final String rol;
  final String _id;

  const CardUser(this.name,this.email,this.rol,this._id);

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
          ListTile(
            leading: Icon(Icons.album),
            title:  Text(name),
            subtitle: Text(rol),
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.end,
            children: <Widget>[
              TextButton(
                child: const Text('Edit'),
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => const Profile(true)),
                  );
                },
              ),
              const SizedBox(width: 8),
              Mutation(
                options: MutationOptions(
                  document: gql(deleteUser),
                ),
                builder: (RunMutation runMutation, result){
                  return TextButton(
                    child: Text("Delete"),
                    onPressed: (){
                      print(result);
                      runMutation({
                        "_id":_id
                      });
                    },
                  );
                },
              ),
              const SizedBox(width: 8),
            ],
          ),
        ],
      )
    );
  }
}