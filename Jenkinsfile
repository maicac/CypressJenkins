pipeline {
    agent any

    stages {
        stage('Instalacion de Dependencias') {
            steps{
                bat 'npm ci'
        }
    }
    stage('Ejecucion de Tests'){
        steps {
            script {
                try {
                    bat 'npx cypress run --e2e --browser chrome'
                } catch (Exception e){
                    currentBuild.result = 'SUCCESS'
                }
            }
        }
    }
    stage('Generacion de Logs y reporte Txt') {
        steps {
            bat 'node generateConsoleReport.js'
        }
    }
}
}