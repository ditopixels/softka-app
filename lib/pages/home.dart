import 'package:app/components/Card.dart';
import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';

import 'profile.dart';


class Home extends StatelessWidget {


  final String getUsers = """
    query{
      users{
        _id
        username
        email
        rol
        salary
      }
    }
  """;
  
  @override
  Widget build(BuildContext context) {

    return Scaffold(
      body: Query(
        options: QueryOptions(
          document:gql(getUsers)
        ),
        builder: (QueryResult result, {fetchMore,refetch}){

          if(result.hasException){
            return Text(result.exception.toString());
          }
          if(result.isLoading){
            return Center(child: CircularProgressIndicator());
          }

          List users = result.data!["users"];

          return CustomScrollView(
            slivers: <Widget>[
              SliverAppBar(
                pinned: _pinned,
                snap: _snap,
                floating: _floating,
                expandedHeight: 160.0,
                flexibleSpace: const FlexibleSpaceBar(
                  title: Text('SliverAppBar'),
                  background: FlutterLogo(),
                ),
              ),
              TextButton(
                child: Text("Create worker"),
                onPressed: (){
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => const Profile(false)),
                  );
                },
              ),
              ListView.builder(
                itemCount: users.length,
                itemBuilder: (context,index){
                  
                  final user = users[index];
                  
                  return CardUser(user["username"],user["email"],user["rol"],user["_id"]);
                }
              ),
            ],
          ),
        },
      )
    );
  }
}
