pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                step{
                    sh 'echo building stage started ! '
                }
                step{
                    sh 'node --version'
                }
                
            }
        }

        

        stage('pre-build') {
            steps {
                step{
                    sh 'node --version'
                }
                
            }
        }
        stage('post-build') {
            steps {
                step{
                    sh 'echo building stage finished ! '
                }
                step{
                    sh 'node --version' 
                }
                
            }
        }

        

        
    }
    
}