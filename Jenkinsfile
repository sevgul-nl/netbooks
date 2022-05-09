pipeline {
    agent any
    tools {
        dotnetsdk 'pi-DOTNET 3.1.417'
    }

    environment {
        registry = 'sevgulnl/dotnet-angular-books'
        HOME = '.'
        JENKINS_USER = 'pi'
    }
    // triggers {
    //     pollSCM 'H * * * *'
    //}
    stages {
    //stage('Checkout') {
    //   steps {
    //    git credentialsId: "sevgul-nl", url: "https://github.com/sevgul-nl/Spring-Hibernate-Shopping-Draft.git/", branch: "master"
    //   }
    //}
    stage('Initialize') {
      steps {
        sh 'dotnet --info'
      }
    }
    stage('Restore packages') {
      steps {
        sh 'dotnet restore -r linux-arm netbooks.csproj'
      }
    }
    stage('Clean') {
      steps {
        sh 'find . -type d -name "build" -exec rm -rf {} +'
        sh 'find . -type d -name "out" -exec rm -rf {} +'
        sh 'find . -type d -name "node_modules" -exec rm -rf {} +'
        sh 'find . -type d -name "package-lock.json" -exec rm -rf {} +'
        sh 'dotnet clean netbooks.csproj'
      }
    }
    stage('Build') {
      steps {
        //sh 'find . -type d -name "build" -exec rm -rf {} +'
        //sh 'find . -type d -name "out" -exec rm -rf {} +'
        //sh 'find . -type d -name "node_modules" -exec rm -rf {} +'
        //sh 'find . -type d -name "package-lock.json" -exec rm -rf {} +'
        sh 'dotnet build netbooks.csproj --configuration Release -o build -r linux-arm'
      }
    }
    stage('Test: Unit Test') {
      steps {
        //sh 'cd ../backend'
        sh 'echo "implement Test: Unit Test.."'
      //sh "dotnet test UnitTest_eBoncuk.csproj"
      }
    }

    stage('Test: Integration Test') {
      steps {
        sh 'echo "implement Test: Integration Test"'
      //sh "dotnet test ProjectPath\\IntegrateTest_eBoncuk.csproj"
      }
    }
    stage('Publish') {
      environment {   registryCredential = 'dockerhub'  }
      steps {
        //sh 'find . -type d -name "build" -exec rm -rf {} +'
        //sh 'find . -type d -name "out" -exec rm -rf {} +'
        //sh 'find . -type d -name "node_modules" -exec rm -rf {} +'
        //sh 'find . -type d -name "package-lock.json" -exec rm -rf {} +'
        sh 'dotnet publish netbooks.csproj -c Release -p:UseAppHost=true -r linux-arm -o out'
        script {
            //sh 'docker stop $(docker ps -aqf "name=sevgulnl/snl-vue") && docker container prune -f -v $(docker ps -aqf "name=sevgulnl/snl-vue")'
            //sh 'docker image prune -f -v $(docker ps -aqf "name=sevgulnl/snl-vue")'

            def appimage = docker.build registry + ":$BUILD_NUMBER"
            docker.withRegistry( '', registryCredential ) {
            appimage.push()
            appimage.push('latest')
            }
          sh 'docker container rm netbooks --force'
          sh 'docker run -dp 5100:80 --name netbooks sevgulnl/dotnet-angular-books'
        }
      }
    }
    //post{
    //  always{
    //    emailext body: "${currentBuild.currentResult}: Job   ${env.JOB_NAME} build ${env.BUILD_NUMBER}\n More info at: ${env.BUILD_URL}",
    //    recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']],
    //    subject: "Jenkins Build ${currentBuild.currentResult}: Job ${env.JOB_NAME}"
    //   }
    //  }
    }
}
