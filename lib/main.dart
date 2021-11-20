
import './pages/home.dart';
import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
void main() async {
  await initHiveForFlutter();
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  
  final HttpLink httpLink = new HttpLink(
    'https://softka-worker.herokuapp.com/graphql',
  );
  @override
  Widget build(BuildContext context) {

    final ValueNotifier<GraphQLClient> client = ValueNotifier(
      GraphQLClient(
        link: httpLink,
        cache: GraphQLCache(store: HiveStore()),
      ),
    );

    return GraphQLProvider(
      client: client,
      child: MaterialApp(
        title: 'Softka Workers',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: Home()
      ),
    );
  }
}

